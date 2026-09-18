import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

export async function render(url: string) {
  const helmetContext = {};

  const appHtml = renderToString(
    React.createElement(
      HelmetProvider,
      { context: helmetContext },
      React.createElement(StaticRouter, { location: url },
        React.createElement(App),
      ),
    ),
  );

  const helmet = (helmetContext as { helmet?: { context: Record<string, unknown> } }).helmet;
  const helmetContextValue = helmet?.context || {};

  const headTags = [
    helmetContextValue.title?.toComponent ? "" : "",
    ...(helmetContextValue.title ? [helmetContextValue.title.toString()] : []),
    ...(helmetContextValue.meta ? [helmetContextValue.meta.toString()] : []),
    ...(helmetContextValue.link ? [helmetContextValue.link.toString()] : []),
    ...(helmetContextValue.script ? [helmetContextValue.script.toString()] : []),
    ...(helmetContextValue.noscript ? [helmetContextValue.noscript.toString()] : []),
  ].filter(Boolean).join("\n");

  return {
    html: appHtml,
    head: headTags,
  };
}
