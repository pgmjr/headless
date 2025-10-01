import apiURL from "@/utils/api";
import Fetcher from "@/utils/fetcher";

interface GetLatestPostsListProps {
  postCount?: number;
  pageNumber?: number;
};

/**
 * Fetches the latest WordPress posts from the REST API.
 * Allows optional parameters for number of posts per page and page number.
 *
 * @param {GetLatestPostsListProps} params - Parameters object.
 * @param {number} [params.postCount=10] - Number of posts per page (whole number). Default: 10
 * @param {number} [params.pageNumber=1] - Page number to fetch.
 *
 * @returns {Promise<any> | {}} - A Promise resolving to a list of posts,
 *                                or an empty object if the input is invalid.
 *
 * @example
 * const posts = await getLatestPostsList({});
 * const posts = await getLatestPostsList({ postCount: 5 });
 * const posts = await getLatestPostsList({ postCount: 10, pageNumber: 3 });
 */
const getLatestPostsList = ({
  postCount,
  pageNumber,
}: GetLatestPostsListProps) => {
  const isLaravel = false;
  const isWordPress = true;

  const countPerPage = postCount ? parseInt(postCount.toString(), 10) : 10;

  if (isNaN(countPerPage) || countPerPage <= 0 || countPerPage >= 1000) {
    console.warn("Invalid post count passed to getLatestPostsList");
    return {};
  }

  const query = `per_page=${countPerPage}&orderby=date&order=desc${pageNumber ? `&page=${pageNumber}` : ''}`;
  const api = apiURL({ query });
  if (isLaravel) {
    const laravelURL = api.posts.laravel
    const latestPostsList = Fetcher(laravelURL);
    return latestPostsList
  } else if (isWordPress) {
    const wpURL = api.posts.wordpress;;
    const latestPostsList = Fetcher(wpURL);
    return latestPostsList
  } else {
    return {}
  }
};

export default getLatestPostsList;
