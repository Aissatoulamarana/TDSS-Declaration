import { CONFIG } from '../../../config-global';
import { paramCase } from '../../../utils/change-case';
import axios, { endpoints } from '../../../utils/axios';
import { PostDetailsHomeView } from '../../../sections/blog/view';
import { getPost, getLatestPosts } from '../../../actions/blog-ssr';

// ----------------------------------------------------------------------

export const metadata = { title: `Post details - ${CONFIG.appName}` };

export default async function Page({ params }) {
  const { title } = params;

  const { post } = await getPost(title);

  const { latestPosts } = await getLatestPosts(title);

  return <PostDetailsHomeView post={post} latestPosts={latestPosts} />;
}

// ----------------------------------------------------------------------

/**
 * [1] Default
 * Remove [1] and [2] if not using [2]
 */
const dynamic = CONFIG.isStaticExport ? 'auto' : 'force-dynamic';

export { dynamic };

/**
 * [2] Static exports
 * https://nextjs.org/docs/app/building-your-application/deploying/static-exports
 */
export async function generateStaticParams() {
  if (CONFIG.isStaticExport) {
    const res = await axios.get(endpoints.post.list);
    return res.data.posts.map((post) => ({ title: paramCase(post.title) }));
  }
  return [];
}
