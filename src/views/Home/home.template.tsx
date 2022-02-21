import React, { FormEvent, useEffect, useState } from 'react'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import { Card, ProductProps } from '../../components/Card'
import { Navbar } from '../../components/Navbar'
import { PrizeWheel } from '../../components/PrizeWheel'
import { SelectedModal, subscribeProps } from './interfaces'
import styles from './styles.module.scss'


export function Home() {
  const [pizes, setPizes] = useState<Array<ProductProps>>([])
  const [wheelOptions, setWheelOptions] = useState([])
  const [subscribe, setSubscribe] = useState<subscribeProps>({} as subscribeProps)
  const [modalSelected, setModalSelected] = useState<SelectedModal>({
    activite: false,
    data: {
      thumbnail: '',
      image: '',
      productTitle: '',
      productName: '',
      code: 0,
      description: ''
    }
  } as SelectedModal);

  /*TODO wheel prize animation rotate and show the winner prize.
  I'd use a .random(), max to 360, to select a deg and pass as a props to component.
  For the selected prize divede 360/8 = 45 and divide the random number
  by 45 with .mathFloor(), the result will be the slice number, just to compare the
   result to a vector position and you'd know the selected prize.
 */

  function handleSubmitSubscribe(e: FormEvent) {
    e.preventDefault()
    setSubscribe({ ...subscribe, submitted: true })
  }

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        contentClassName={styles.modal}
      >
        <Modal.Header closeButton className={styles.header}>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className={`${styles.desactive} ${styles.textHeader}`}>
              Prize {'>'}
            </div>
            <div className={`${styles.active} ${styles.textHeader}`}>
              {modalSelected.data.productName}
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className={styles.bodyContainer}>
            <Col xs={6} className={styles.alignImage}>
              <img src={modalSelected.data.image} alt={`photo of the ${modalSelected.data.productName}`} />
            </Col>
            <Col xs={6}>
              <span className={styles.bodyTitle}>{modalSelected.data.productName}</span>
              <span className={styles.bodyCode}>Cód. {modalSelected.data.code}</span>
              <div className={styles.alignDivider}>
                <span className={`${styles.divider} ${styles.fillDivider}`} />
                <span className={styles.divider} />
              </div>
              <p className={styles.bodyDescription}>
                {modalSelected.data.description}
              </p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className={styles.footer}>
          <Button className={styles.buttonFooter} onClick={props.onHide}>
            Play Now
          </Button>
        </Modal.Footer>
      </Modal>)
  }

  useEffect(() => {
    const getOptions = [
      { optionName: 'Lucky' },
      { optionName: 'Unlucky' },
      { optionName: 'Lucky' },
      { optionName: 'Unlucky' },
      { optionName: 'Lucky' },
      { optionName: 'Unlucky' },
      { optionName: 'Lucky' },
      { optionName: 'Unlucky' }]

    const getPizes = [{
      thumbnail: '/images/thumb_ipad.png',
      image: '/images/ipad.png',
      productTitle: 'PRIZE 01',
      code: 44658,
      productName: 'Ipad Pro',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tellus ut commodo pellentesque. Pellentesque ut eleifend nisi. Cras sit amet elit vel felis dictum semper sed ut lacus. Proin molestie dui nec elit mattis lobortis.'
    }, {
      thumbnail: '/images/thumb_iphone.png',
      image: '/images/iphone.png',
      productTitle: 'PRIZE 02',
      code: 44658,
      productName: 'Iphone 13 Pro',
      description: 'Quisque congue auctor fermentum. Proin lectus ligula, accumsan eget varius quis, facilisis a tortor. Integer luctus varius risus, nec condimentum erat sagittis id. Nunc at lacus magna. Ut volutpat velit interdum laoreet ultrices.'
    }, 
    {
      thumbnail: '/images/thumb_apple-watch.png',
      image: '/images/apple-watch.png',
      productTitle: 'PRIZE 03',
      code: 44658,
      productName: 'Apple Watch 6',
      description: 'Phasellus ante velit, hendrerit sed ullamcorper vel, lobortis eu lorem. Etiam aliquam leo vel purus semper, a tempor magna aliquet. Vestibulum et imperdiet libero. Integer lacinia lobortis tortor. Nulla ac interdum ipsum. Nulla eget finibus arcu.'
    }, 
    {
      thumbnail: '/images/thumb_apple-tag.png',
      image: '/images/apple-tag.png',
      productTitle: 'PRIZE 04',
      code: 44658,
      productName: 'Apple Tags',
      description: 'Mauris lectus tellus, finibus tempor tincidunt quis, elementum a dui. Aenean tincidunt enim dui, id eleifend lacus molestie a. Praesent lacus turpis, ullamcorper sed metus et, venenatis faucibus leo. Donec in eros vitae sem pharetra cursus.'
    }]

    setPizes(getPizes)
    setWheelOptions(getOptions)
  }, [])

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalSelected.activite}
        onHide={() => setModalSelected({ ...modalSelected, activite: false })}
      />
      <Navbar />
      <div className={styles.bannerHome}>
        <Container className={styles.heightAuto}>
          <Row className={`align-items-center ${styles.heightAuto}`}>
            <Col md={12} lg={5} className={`text-align-start ${styles.textBanner}`}>
              <h1>Spin to Win</h1>
              <h3>Spin the wheel to win prizes</h3>
              <h5 className="mt-4 mb-3">Here tou can add a few sentences explaning what prizes can be won and any other information you want people to know</h5>
              <Button type="button" variant="primary" className={`mt-2 ${styles.buttonShaped}`}>PLAY NOW</Button>
            </Col>
            <Col md={12} lg={7} className={styles.imageBanner}>
              <div className={styles.prizeWheel}>
                <PrizeWheel option={wheelOptions} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.products}>
        <Container className={styles.heightAuto}>
          <Row className={`align-items-center ${styles.heightAuto}`}>
            <Col sm={12}>
              <h3 className="mb-4">Some of the pizes available</h3>
              <div className={`d-grid gap-4 ${styles.pizesContainer}`}>
                {pizes.map((card) => (
                  <Card
                    thumbnail={card.thumbnail}
                    productTitle={card.productTitle}
                    productName={card.productName}
                    onClick={() => setModalSelected({ activite: true, data: card })} />
                )
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid>
        <div className={styles.subcribe}>
          <Row>
            <h3 className="text-center mb-3">Subscribe to receive our latest posts.</h3>
          </Row>
          {!subscribe.submitted ?
            <Form onSubmit={handleSubmitSubscribe}>
              <Row>
                <Col xs={12} md={6} className="mt-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    value={subscribe.name}
                    type="text"
                    required
                    className="form-control"
                    placeholder="Type your name"
                    onChange={(e) => setSubscribe({ ...subscribe, name: e.target.value })} />
                </Col>
                <Col xs={12} md={6} className="mt-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    value={subscribe.email}
                    type="email"
                    required
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Type your email"
                    onChange={(e) => setSubscribe({ ...subscribe, email: e.target.value })}
                  />
                </Col>
                <Row className="mt-4 justify-content-md-center">
                  <Col xs="auto">
                    <Button
                      type="submit"
                      variant="primary"
                      className={styles.submitButton}
                    >
                      <img src="/images/mail.png" width="16" alt="Mail icon" className="me-2" />
                      Subscribe
                    </Button>
                  </Col>
                </Row>
              </Row>
            </Form>
            :
            <Row>
              <p className="text-center"> “Thank you {subscribe.name}</p>
            </Row>
          }
        </div>
      </Container>
    </>
  )
}
