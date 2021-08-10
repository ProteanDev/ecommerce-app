const Error = ({ statusCode }) => (
  <div className={'flex flex-row align-middle justify-center my-80'}>
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server 🥺`
        : 'An error occurred on client'}
    </p>
  </div>
)

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
