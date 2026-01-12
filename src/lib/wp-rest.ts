// lib/wp-rest.ts
export async function getPostsRest() {
  const res = await fetch(
    'https://cheeltech.com/ctf-practice-areeba/wp-json/wp/v2/posts?_embed',
    {
      next: { revalidate: 120 } // cache for 2 minutes
    }
  );

  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}
