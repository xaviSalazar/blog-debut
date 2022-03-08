import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
// import remarkHtml from 'remark-html'
import rehypeReact from 'rehype-react'
import remarkHtml from 'remark-html'
import md from 'markdown-it'

export function getAllPosts() {

  const postsDirectory = path.join(process.cwd(), '_posts')
  const filenames = fs.readdirSync(postsDirectory)

  return filenames.map(filename => {
    const file = fs.readFileSync(path.join(process.cwd(), '_posts', filename), 'utf8')

    // get frontmatter
    const { data } = matter(file)

    // get slug from filename
    const slug = filename.replace(/\.md$/, '')

    // return combined frontmatter and slug; build permalink
    return {
      ...data,
      slug,
      permalink: `/posts/${slug}`,
    }
  })

}

export function getPostBySlug(slug) {
  const file = fs.readFileSync(path.join(process.cwd(), '_posts', `${slug}.md`), 'utf8')

  const {
    content,
    data,
  } = matter(file)

  // const body = remark().use(remarkHtml).processSync(content).toString()
  const body = md().render(content)

  return {
    ...data,
    body,
  }
}
