import { IMAGE_BASE_URL } from '@/lib';
import { useRouter } from 'next/router';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function CardComponent({title,description,imagePath,id}) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/movies/${id}`);
  }
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {
        imagePath
        ?IMAGE_BASE_URL + imagePath
        :"https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image.png"

      }/>
      <Card.Body>
        <Card.Title>{title?title:"Unknown"}</Card.Title>
        <Button onClick={handleClick} variant="primary">ViewDetail</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
