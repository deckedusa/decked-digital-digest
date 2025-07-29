import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { auth } from '../../auth';
import { redirect } from 'next/navigation';
import { useMDXComponents as getMDXComponents } from '../../mdx-components'
 
export const generateStaticParams = generateStaticParamsFor('mdxPath')
 
export async function generateMetadata(props) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath)
  return metadata
}
 
const Wrapper = getMDXComponents().wrapper
 
export default async function Page(props) {
  // const session = await auth();
  // if (!session) {
  //   //console.log("hello");
  //   //console.log("params", props.params.mdxPath);
  //   redirect('/signin');
  //   return;
  // }
  const params = await props.params
  const result = await importPage(params.mdxPath)
  const { default: MDXContent, toc, metadata } = result
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}