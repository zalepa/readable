import uuidv1 from 'uuid';
import { connect } from 'react-redux';
import { createComment } from "../../actions/comments";
import NewCommentForm from "../ui/NewCommentForm";

function dispatchToProps(dispatch) {
    return {
        onSubmit: (comment) => {
            comment.id = uuidv1();
            comment.timestamp = +new Date();
            dispatch(createComment(comment))
        }
    }
}

function stateToProps(state, ownProps) {
    return {
        parentId: ownProps.match.params.postId
    }
}

export default connect(stateToProps, dispatchToProps)(NewCommentForm);