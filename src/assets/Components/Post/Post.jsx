import PropTypes from 'prop-types';

const Post = ({post}) => {
    const {id, title}=post;
    const postStyle={
        border: '2px solid red',
        borderRadius: '20px',
        padding: '10px'
    }
    return (
        <div style={postStyle}>
            <h2>Post Of Id: {id}</h2>
            <p>{title}</p>
        </div>
    );
};
Post.propTypes = {
    post: PropTypes.object,
};

export default Post;
