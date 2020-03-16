import React, { Component } from 'react'
import '../Post.css';
import nena from '../images/nena.jpg'
import img2 from '../images/like.png'
import jack from '../images/jack.jpg'



class Post extends Component {

    constructor(props) {

        super(props);
        this.state = {
            likes: this.props.likes,
        }

        this.arr = [].concat(this.state.likes)
        this.innerText = '';
        this.first = [...this.props.comment.flat()];
        this.comment = this.first.map(i => i.comment);
        this.author1 = this.first.map(i => i.author)
        this.created1 = this.first.map(i => i.created_at)


        console.log('text ', this.author2)
        this.res = this.props.props
        console.log(this.comment)
        console.log("--------")
        console.log(this.author1)
        console.log(this.created)

        console.log(this.state.likes);


    }


    textFun = (text) => {
        if (text.includes('\n')) {
            console.log("hit", text)

            let QA = text.split('\n');
            // console.log(QA);
            this.innerText = "innerText"
            return <div className="innerText"><p>{QA[0] + '?'}</p><p>{QA[1]}</p></div>
        }
        else {
            console.log("hi", text)

            this.innerText = "text"
            return <div className="text"><p>{text}</p></div>
        }
    }


    incrementCounter = (index) => {
        this.arr[index] += 1;
        this.setState({
            ...this.state,
            likes: [...this.arr]
        })
    }
    render() {
        //let res = this.props.props;
        let created = this.props.created;
        let text = this.props.text;

        return (<div className="main">{
            this.res.map((i, index) =>

                <div className="main1">
                    <div className="display" key={index}>
                        <div className="author">
                            <img src={this.res[index].avatar} className="img"></img>
                            <div >
                                <h4 className="names">{this.res[index].firstname + "" + this.res[index].lastname}</h4>
                                <h6 className="created">{created[index]}</h6>
                            </div>
                        </div>
                        <div >

                            {
                                this.textFun(text[index])
                            }
                        </div>



                    </div>

                    {//=========Likses Section===============//
                    }

                    <div className="likesDiv">
                        <div className="bound">
                            <img src={img2} className="likeIcon" onClick={() => this.incrementCounter(index)}></img>
                            <p id="Commentname">Likes : {this.state.likes[index]}</p>
                            <p id="likesCategory">{this.props.category[index]}</p>
                        </div>
                    </div>





                    {//-----------commment section--------------------------------
                    }

                    {(this.comment.length > index
                        &&
                        <div className="commentContainer">
                            <div><p style={{ textAlign: 'left', paddingLeft: '5px' }}><b>Comments :</b></p></div>
                            <div className="bound">


                                <img src={this.author1[index].avatar} className="imgComment"></img>

                                <div className="triangle-left"></div>
                                <div className="comment">

                                    {(this.author1.length > index) && <p id="Commentname">{this.author1[index].firstname + " " + this.author1[index].lastname} </p>}
                                    <p className="created1">{this.created1[index]} </p>
                                    <div style={{ marginTop: '10px' }} > <p>{this.comment[index]} </p></div>

                                </div>


                            </div>

                        </div>






                    )}

                </div>

            )
        }

        </div>)



    }

} export default Post

