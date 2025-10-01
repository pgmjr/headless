const sanitizeQuery = (query: string): string => {
  return query
    .replace(/[\n\r\t]/g, '')        // Remove line breaks and tabs
    .replace(/\s+/g, ' ')            // Collapse multiple spaces into one
    .trim()                          // Remove leading/trailing spaces
    .replace(/[^\w\-.\=\&\s]/g, '')      // Optional: remove special chars except word chars, dash, dot, space
}

export default sanitizeQuery;