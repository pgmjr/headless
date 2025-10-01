import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { getSSRProps, getSSGProps } from '@/data/article';
import CSRComponent from '@/lib/base/CSRComponent';
import SSRComponent from '@/lib/base/SSRComponent';
import SSGComponent from '@/lib/base/SSGComponent';

export async function renderMode({
  mode,
  context,
  fallbackData = 'Default CSR fallback.',
}: {
  mode: 'ssr' | 'ssg' | 'csr';
  context?: GetServerSidePropsContext | GetStaticPropsContext;
  fallbackData?: string;
}) {
  if (mode === 'ssr') {
    const result = await getSSRProps(context as GetServerSidePropsContext);
    if (result?.props?.data) return SSRComponent({ data: result.props.data as string });
  }

  if (mode === 'ssg') {
    const result = await getSSGProps(context as GetStaticPropsContext);
    if (result?.props?.data) return SSGComponent({ data: result.props.data as string });
  }

  if (fallbackData) return CSRComponent({ fallback: fallbackData });
  return {};
}

/**
 * Example Usage (Client-Defined Strategy):
 * -----------------------------------------
 * import { renderMode } from '@/lib/renderer';
 * import { useState } from 'react';
 * 
 * export default function ExamplePage() {
 *   const [strategy, setStrategy] = useState<'ssr' | 'ssg' | 'csr'>('csr');
 * 
 *   const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
 *     setStrategy(event.target.value as 'ssr' | 'ssg' | 'csr');
 *   };
 * 
 *   return (
 *     <div>
 *       <select onChange={handleChange} className="mb-4 p-2 border">
 *         <option value="csr">CSR</option>
 *         <option value="ssr">SSR</option>
 *         <option value="ssg">SSG</option>
 *       </select>
 *       <div>{renderMode({ mode: strategy })}</div>
 *     </div>
 *   );
 * }
 */

export default renderMode