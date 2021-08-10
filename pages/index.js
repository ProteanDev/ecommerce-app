// this is suppose to be the landing page
export default function Index() {
  return <div></div>
}

export const getServerSideProps = () => {
  return {
    redirect: {
      destination: '/home',
    },
  }
}
