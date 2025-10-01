import parse from 'html-react-parser';

export * from './fetcher';
export * from './WhichValue';

/**
 * ***parseHTML***
 * 
 * A utility function that converts a raw HTML string into React-compatible elements.
 * It uses the `html-react-parser` library under the hood to safely convert valid HTML strings
 * into renderable JSX or React nodes. This allows HTML content (e.g., from CMS or API) to be rendered
 * within React components without using dangerouslySetInnerHTML.
 *
 * ***Parameters:***
 * @param htmlString - A valid HTML string to be parsed (e.g., "<p><strong>Hello</strong></p>")
 *
 * ***Syntax:***
 * 
 * const parsed = parseHTML("<p>Hello</p>");
 * 
 * ***Usage:***
 * 
 * import { parseHTML } from '@/utils';
 * 
 * const html = '<div><h1>Hello World</h1></div>';
 * 
 * return <>{parseHTML(html)}</>;
 * 
 */
export const parseHTML = (htmlString: string) => parse(htmlString);
