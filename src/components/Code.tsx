import theme from "prism-react-renderer/themes/nightOwl";
import Highlight, { defaultProps } from "prism-react-renderer";

const RE = /{([\d,-]+)}/;

function calculateLinesToHighlight(meta: string) {
  if (RE.test(meta)) {
    const lineNumbers = RE.exec(meta)![1]
      .split(",")
      .map((v) => v.split("-").map((y) => parseInt(y, 10)));
    return (index) => {
      const lineNumber = index + 1;
      const inRange = lineNumbers.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start
      );
      return inRange;
    };
  } else {
    return () => false;
  }
}

function Code(props: { [x: string]: any }) {
  const {
    children: codeString = "",
    title,
    showLineNumbers: shouldShowLineNumbers = undefined,
    metastring = "",
    className = "",
  } = props;
  const shouldHighlightLine = calculateLinesToHighlight(metastring);
  const language = className.replace(/language-/, "");
  const showTitle = title || ![""].includes(language);
  const numLines = codeString.split("\n").length;
  if (numLines === 1) {
    return <code>{codeString}</code>;
  }

  return (
    <Highlight
      {...defaultProps}
      code={codeString.trim()}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens: lines, getLineProps, getTokenProps }) => {
        const numLines = lines.length;
        const showLineNumbers: boolean =
          typeof shouldShowLineNumbers === "boolean"
            ? shouldShowLineNumbers
            : shouldShowLineNumbers === "true"
            ? true
            : shouldShowLineNumbers === "false"
            ? false
            : numLines > 2 &&
              !["", "txt", "text", "shell", "bash", "dir"].includes(language);

        return (
          <div className="code">
            <pre className={className} style={style}>
              {showTitle && (
                <div className="code-title">{title || language}</div>
              )}

              {lines.map((line, i) => (
                <div
                  key={i}
                  {...getLineProps({
                    line,
                    key: i,
                    className: shouldHighlightLine(i)
                      ? "code-highlightLine"
                      : "",
                  })}
                >
                  {showLineNumbers && (
                    <span className="code-lineNumber">{i + 1}</span>
                  )}

                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          </div>
        );
      }}
    </Highlight>
  );
}

export default Code;
