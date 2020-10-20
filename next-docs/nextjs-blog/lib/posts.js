import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostData() {
  // get file names under /posts
  const fileNames = fs.readdirSync(postDirectory);
  const allPostData = fileNames.map((fileName) => {
    // remove .md from the filename to get `id`
    const id = fileName.replace(/\.md$/, '');

    // read markdown file as string
    const fullPath = path.join(postDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    // use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // combine the data with th id
    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
