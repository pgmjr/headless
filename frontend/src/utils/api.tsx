import { apiOrigin, wpOrigin } from "@/config"
import sanitizeQuery from "./sanitizeURLQuery";
interface apiURLProps {
  slug?: string;
  query?: string;
}

const apiURL = ({ slug, query }: apiURLProps) => {
  const cleanQuery = query ? sanitizeQuery(query) : undefined;
  return {
    menu: {
      list: {
        laravel: `${apiOrigin}/menus`,
        wordpress: `${wpOrigin}/wp-json/custom/v1/menus/`
      },
      primary: {
        laravel: `${apiOrigin}/menus?cat=primary`,
        wordpress: `${wpOrigin}/wp-json/custom/v1/menus/primary`
      },
      secondary: {
        laravel: `${apiOrigin}/menus?cat=secondary`,
        wordpress: `${wpOrigin}/wp-json/custom/v1/menus/secondary`
      },
      sidebar: {
        laravel: `${apiOrigin}/menus?cat=sidebar`,
        wordpress: `${wpOrigin}/wp-json/custom/v1/menus/sidebar`
      },
      footer: {
        laravel: `${apiOrigin}menus?cat=footer`,
        wordpress: `${wpOrigin}/wp-json/custom/v1/menus/footer`
      },
      custom: {
        laravel: `${apiOrigin}menus${slug ? '?' + slug : ''}`,
        wordpress: `${wpOrigin}/wp-json/custom/v1/menus${slug ? '/' + slug : ''}`
      }
    },
    page: {
      laravel: `${apiOrigin}/pages${slug ? '/' + slug : ''}${cleanQuery ? '?' + cleanQuery : ''}`,
      wordpress: `${wpOrigin}/wp-json/wp/v2/pages${slug ? '/' + slug : ''}${cleanQuery ? '?' + cleanQuery : ''}`
    },
    posts: {
      laravel: `${apiOrigin}/posts${slug ? '/' + slug : ''}${cleanQuery ? '?' + cleanQuery : ''}`,
      wordpress: `${wpOrigin}/wp-json/wp/v2/posts${slug ? '/' + slug : ''}${cleanQuery ? '?' + cleanQuery : ''}`
    },
    categories: {
      laravel: `${apiOrigin}/categories${slug ? '/' + slug : ''}${cleanQuery ? '?' + cleanQuery : ''}`,
      wordpress: `${wpOrigin}/wp-json/wp/v2/categories${slug ? '/' + slug : ''}${cleanQuery ? '?' + cleanQuery : ''}`
    },
    tags: {
      laravel: `${apiOrigin}/tags${slug ? '/' + slug : ''}${cleanQuery ? '?' + cleanQuery : ''}`,
      wordpress: `${wpOrigin}/wp-json/wp/v2/tags${slug ? '/' + slug : ''}${cleanQuery ? '?' + cleanQuery : ''}`
    },
    media: {
      laravel: `${apiOrigin}/media${slug ? '/' + slug : ''}${cleanQuery ? '?' + cleanQuery : ''}`,
      wordpress: `${wpOrigin}/wp-json/wp/v2/media${slug ? '/' + slug : ''}${cleanQuery ? '?' + cleanQuery : ''}`
    },
    cpt: {
      laravel: `${apiOrigin}/${slug ? slug : ''}${cleanQuery ? '?' + cleanQuery : ''}`,
      wordpress: `${wpOrigin}/wp-json/wp/v3/${slug ? slug : ''}${cleanQuery ? '?' + cleanQuery : ''}`
    }
  }
}

export default apiURL;