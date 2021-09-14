import createReducer from '../../../lib/createReducer';
import * as types from '../../actions/posts/types';

const initialState = {
  posts: [],
  searchResults: [],
  filters: [],
};

export const postReducer = createReducer(initialState, {
  [types.GET_ALL_POSTS_REQUEST](state, action) {
    return {
      ...state,
    };
  },
  [types.GET_ALL_POSTS_RESPONSE](state, action) {
    let list = action.data.map(item => ({...item, block: false}));
    return {...state, posts: list};
  },
  [types.GET_ALL_POSTS_FAILED](state) {
    return {
      ...state,
    };
  },
  [types.SEARCH_POSTS_REQUEST](state, action) {
    return {
      ...state,
      searchResults: [],
    };
  },
  [types.SEARCH_POSTS_RESPONSE](state, action) {
    return {...state, searchResults: action.data};
  },
  [types.SEARCH_POSTS_FAILED](state) {
    return {
      ...state,
    };
  },
  [types.ADD_POST_REQUEST](state, action) {
    return {
      ...state,
    };
  },
  [types.ADD_POST_RESPONSE](state, action) {
    return {...state, posts: [...state, action.data]};
  },
  [types.ADD_POST_FAILED](state) {
    return {
      ...state,
    };
  },
  [types.FILTER_POST_REQUEST](state, action) {
    return {
      ...state,
    };
  },
  [types.FILTER_POST_RESPONSE](state, action) {
    return {...state, filters: action.data};
  },
  [types.FILTER_POST_FAILED](state) {
    return {
      ...state,
    };
  },
  [types.BLOCK_OR_REPORT_POST_REQUEST](state, action) {
    return {
      ...state,
    };
  },
  [types.BLOCK_OR_REPORT_POST_RESPONSE](state, action) {
    let newlist = state.posts.map(item => {
      if (item.id == action.data.id) {
        item.block = true;
      }
      return item;
    });
    return {...state, posts: newlist};
  },
  [types.BLOCK_OR_REPORT_POST_FAILED](state) {
    return {
      ...state,
    };
  },
  [types.ADD_COMMENT_TO_POST_REQUEST](state, action) {
    return {
      ...state,
    };
  },
  [types.ADD_COMMENT_TO_POST_RESPONSE](state, action) {
    let newlist = state.posts.map(item => {
      if (item.id == action.data.postId) {
        item.comments.push({comment: action.data.comment});
      }
      return item;
    });
    return {...state, posts: newlist};
  },
  [types.ADD_COMMENT_TO_POST_FAILED](state) {
    return {
      ...state,
    };
  },
});
