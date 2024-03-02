import axios from 'axios'
import {
  EXAM_LIST_REQUEST,
  EXAM_LIST_SUCCESS,
  EXAM_LIST_FAIL,
  EXAM_DETAILS_REQUEST,
  EXAM_DETAILS_SUCCESS,
  EXAM_DETAILS_FAIL,
  EXAM_DELETE_REQUEST,
  EXAM_DELETE_SUCCESS,
  EXAM_DELETE_FAIL,
  EXAM_CREATE_RESET,
  EXAM_CREATE_FAIL,
  EXAM_CREATE_SUCCESS,
  EXAM_CREATE_REQUEST,
  EXAM_UPDATE_REQUEST,
  EXAM_UPDATE_SUCCESS,
  EXAM_UPDATE_FAIL,
  EXAM_UPDATE_RESET,
  EXAM_CREATE_REVIEW_REQUEST,
  EXAM_CREATE_REVIEW_SUCCESS,
  EXAM_CREATE_REVIEW_FAIL,
  EXAM_CREATE_REVIEW_RESET,
  EXAM_TOP_REQUEST,
  EXAM_TOP_SUCCESS,
  EXAM_TOP_FAIL,
} from '../constants/questionConstants'

export const listExams = () => async (dispatch) => {
  try {
    dispatch({ type: EXAM_LIST_REQUEST })

    const { data } = await axios.get(`/question/activexam`)
    // console.log('data', data)
    dispatch({
      type: EXAM_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: EXAM_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listExamDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: EXAM_DETAILS_REQUEST })

    const { data } = await axios.get(
      `/question/activexam/${id}`
    )

    dispatch({
      type: EXAM_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: EXAM_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const questionDetails = (multi) => async (dispatch) => {
  try {
    dispatch({ type: EXAM_DETAILS_REQUEST })

    const id = multi.id
    const multiple = {
      question: multi.question,
      optionA: multi.optionA,
      optionB: multi.optionB,
      optionC: multi.optionC,
      optionD: multi.optionD,
      answer: multi.answer,
      marks: multi.marks,
    }
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post(
      `/question/setques/${id}`,
      {
        multiple,
      },
      config
    )

    dispatch({
      type: EXAM_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: EXAM_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// export const deleteProduct = (id) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: PRODUCT_DELETE_REQUEST,
//     })

//     const {
//       userLogin: { userInfo },
//     } = getState()

//     const config = {
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     }

//     await axios.delete(`/api/products/${id}`, config)

//     dispatch({
//       type: PRODUCT_DELETE_SUCCESS,
//     })
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message
//     if (message === 'Not authorized, token failed') {
//       dispatch(logout())
//     }
//     dispatch({
//       type: PRODUCT_DELETE_FAIL,
//       payload: message,
//     })
//   }
// }

// export const createProduct = () => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: PRODUCT_CREATE_REQUEST,
//     })

//     const {
//       userLogin: { userInfo },
//     } = getState()

//     const config = {
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     }

//     const { data } = await axios.post(`/api/products`, {}, config)

//     dispatch({
//       type: PRODUCT_CREATE_SUCCESS,
//       payload: data,
//     })
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message
//     if (message === 'Not authorized, token failed') {
//       dispatch(logout())
//     }
//     dispatch({
//       type: PRODUCT_CREATE_FAIL,
//       payload: message,
//     })
//   }
// }

// export const updateProduct = (product) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: PRODUCT_UPDATE_REQUEST,
//     })

//     const {
//       userLogin: { userInfo },
//     } = getState()

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     }

//     const { data } = await axios.put(
//       `/api/products/${product._id}`,
//       product,
//       config
//     )

//     dispatch({
//       type: PRODUCT_UPDATE_SUCCESS,
//       payload: data,
//     })
//     dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message
//     if (message === 'Not authorized, token failed') {
//       dispatch(logout())
//     }
//     dispatch({
//       type: PRODUCT_UPDATE_FAIL,
//       payload: message,
//     })
//   }
// }

// export const createProductReview =
//   (productId, review) => async (dispatch, getState) => {
//     try {
//       dispatch({
//         type: PRODUCT_CREATE_REVIEW_REQUEST,
//       })

//       const {
//         userLogin: { userInfo },
//       } = getState()

//       const config = {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${userInfo.token}`,
//         },
//       }

//       await axios.post(`/api/products/${productId}/reviews`, review, config)

//       dispatch({
//         type: PRODUCT_CREATE_REVIEW_SUCCESS,
//       })
//     } catch (error) {
//       const message =
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message
//       if (message === 'Not authorized, token failed') {
//         dispatch(logout())
//       }
//       dispatch({
//         type: PRODUCT_CREATE_REVIEW_FAIL,
//         payload: message,
//       })
//     }
//   }

// export const listTopProducts = () => async (dispatch) => {
//   try {
//     dispatch({ type: PRODUCT_TOP_REQUEST })

//     const { data } = await axios.get(`/api/products/top`)

//     dispatch({
//       type: PRODUCT_TOP_SUCCESS,
//       payload: data,
//     })
//   } catch (error) {
//     dispatch({
//       type: PRODUCT_TOP_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     })
//   }
// }
