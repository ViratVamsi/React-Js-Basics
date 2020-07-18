import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

class DishdetailComponent extends Component{
    
    constructor(props){
        super(props);
    }

    renderDish(dish){
        if (dish != null)
            return(
                <Card>
                    <CardImg width="100%" top src={dish.image}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(commentsList){
        const cmnts = commentsList.map(comment => {
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

    render(){

        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4> Comments </h4>
                        {this.props.dish && this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            </div>
        );
    }

}


export default DishdetailComponent;