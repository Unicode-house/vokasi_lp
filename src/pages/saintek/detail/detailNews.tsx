import { useParams } from 'react-router-dom'

const DetailsNews = () => {
  const { id } = useParams()
  console.log(id)
  return <div>DetailsNews</div>
}

export default DetailsNews
