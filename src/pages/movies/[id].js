import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { BASE_URL, API_KEY, IMAGE_BASE_URL } from '../../lib';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

export default function Movie() {
  const router = useRouter();
  console.log(router.query);
  const [id, setId] = useState(router.query.id);
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState({});
  const [key, setKey] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleClick = () => setClick(true);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setLoading(true);
    fetch(BASE_URL + `/movie/${id}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
    fetch(BASE_URL + `/movie/${id}/videos?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('movie is from ', data);
        const key = data.results[0].key;
        setKey(key);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  console.log(movie);
  return (
    <div className="container">
      <div className="container text-center">
        <div className="row">
          <div className="col-3">
            <Card>
              <Card.Img
                variant="top"
                src={
                  movie.backdrop_path
                    ? IMAGE_BASE_URL + movie.backdrop_path
                    : 'https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image.png'
                }
              />
              <Card.Body>

              </Card.Body>
            </Card>
          </div>
          <div className="col-9">
  
            <div>
            
              <p>{movie.overview ? movie.overview : 'Unknow'}</p>
              <Button
              variant="primary"
              onClick={handleShow}>
              Watching
              </Button>
            </div>
            <div>
              <Modal show={show} onHide={handleClose} size="lg">
                <div class="ratio ratio-16x9">
                  <iframe src={`https://www.youtube.com/embed/${key}`} title="YouTube video" allowfullscreen></iframe>
                </div>
            </Modal>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

