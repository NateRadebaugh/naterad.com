import React from "react";
import { css } from "@emotion/core";
import theme from "prism-react-renderer/themes/nightOwl";
import Highlight, { defaultProps } from "prism-react-renderer";

const RE = /{([\d,-]+)}/;

const wrapperStyles = css`
  overflow: auto;
  margin-left: -20px;
  margin-right: -20px;
`;

const preStyles = css`
  float: left;
  min-width: 100%;
  overflow: initial;
`;

function calculateLinesToHighlight(meta) {
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

function Code(props) {
  const {
    children: codeString = "",
    title,
    metastring = "",
    className = "",
  } = props;
  const shouldHighlightLine = calculateLinesToHighlight(metastring);
  const language = className.replace(/language-/, "");
  const showLineNumbers = !["", "txt", "text", "shell", "bash", "dir"].includes(
    language
  );
  const showTitle = title || ![""].includes(language);

  return (
    <Highlight
      {...defaultProps}
      code={codeString.trim()}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div css={wrapperStyles}>
          <pre className={className} style={style} css={preStyles}>
            {showTitle ? (
              <div
                css={`
                  display: inline-block;
                  color: #011627;
                  background-color: #d6deeb;
                  font-size: 0.75rem;
                  letter-spacing: 0.075em;
                  line-height: 1;
                  left: 1.5rem;
                  text-transform: uppercase;
                  top: 0px;
                  border-radius: 0px 0px 4px 4px;
                  padding: 0.25rem 0.5rem;
                  margin-bottom: 0.25rem;
                  user-select: none;
                `}
              >
                {title || language}
              </div>
            ) : (
              // Spacer
              <div css={{ height: "8px" }} />
            )}

            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({
                  line,
                  key: i,
                  className: shouldHighlightLine(i) ? "highlight-line" : "",
                })}
                css={
                  shouldHighlightLine(i)
                    ? `
                      background-color: rgba(201, 167, 255, 0.2);
                      margin: 0 -10px;
                      padding: 0 5px;
                      border-left: 5px solid #c9a7ff;
                    `
                    : undefined
                }
              >
                {showLineNumbers && (
                  <span
                    css={css`
                      display: inline-block;
                      width: 2em;
                      user-select: none;
                      opacity: 0.3;
                    `}
                  >
                    {i + 1}
                  </span>
                )}
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
}

export default Code;
