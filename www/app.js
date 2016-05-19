var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data}/>
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        {
            this.props.data.map(function(comment){
                return(
                    <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                    </Comment>
                );
            })
        }
      </div>
    );
  }
});

var Comment = React.createClass({
    render:function(){
        return(
            <div className="comment">
            <h2>{this.props.author}</h2>
            {this.props.children}
            </div>
        );
    }
})

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        <input type="text"/>
        <button>提交</button>
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox data={data}/>,
  document.getElementById('content')
);