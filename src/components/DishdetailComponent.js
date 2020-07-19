import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

const DishDetail = (props) => {
    if(props.dish!=null){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4> Comments </h4>
                        
                        < RenderComments comments={props.dish.comments} />
                    </div>
                </div>
            </div>
        );
    }
    return(
        <div></div>
    );
}


function RenderDish({dish}){
    return(
        <Card>
            <CardImg width="100%" top src={dish.image}></CardImg>
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

function RenderComments({comments}){
    const cmnts = comments.map(comment => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author},
                &nbsp;
                {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                </p>
            </li>
        )
    })
    return(
        
        <ul className='list-unstyled'>
            {cmnts}
        </ul>
    );
}


export default DishDetail;