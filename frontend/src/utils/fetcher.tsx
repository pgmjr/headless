import { useEffect, useState } from "react";
/**
 * ***Fetcher*** - Utility for safely fetching JSON from any API endpoint.
 *
 * - Ensures only valid JSON responses are returned.
 * - Checks HTTP response status and content-type.
 * - Prevents errors from malformed or failed responses.
 * - Works great with SWR, getStaticProps, and getServerSideProps.
 *
 * ***Syntax:***
 * 
 *   await Fetcher(url: string): Promise<any | null>
 *
 * ***Usage (with SWR):***
 * 
 *   const { data } = useSWR('/api/posts', Fetcher);
 *
 * ***Usage (with SSR):***
 * 
 *   const data = await Fetcher('https://api.example.com/posts');
 *   return { props: { data: data || [] } };
 *
 * ***Ideal Use Cases:***
 * - Headless WordPress or Laravel API integration
 * - Fallback fetching strategies (Laravel → WordPress → JSON)
 * - Blog, product, service, or dynamic route content
 */

// Note: You can import this function across all product, service, and single pages:
// import { Fetcher } from '@/utils';
export const Fetcher = (url: string) => {
  const [data, setdata] = useState();

  try {
    // const res: Response = await fetch(url);
    // const contentType: string | null = res.headers.get('content-type');
    // if (res.ok && contentType && contentType.includes('application/json')) {
    //   return await res.json();
    // }

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((content) => {
          setdata(content);
        });
    }, [url]);

    return data;

  } catch {
    return null;
  }
}

// Using async to fetch the data from URL
export const FetcherV2 = async (url: string) => {
  try {
    const res: Response = await fetch(url);
    const contentType: string | null = res.headers.get('content-type');
    if (res.ok && contentType && contentType.includes('application/json')) {
      return await res.json();
    }
    return null;
  } catch {
    return null;
  }
}

export default Fetcher;
