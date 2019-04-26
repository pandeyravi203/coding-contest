import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {

        resultData: {},
        problemsArray: [],
        problemData:{},
      
    },

    actions: {
        judgeApiCall: ({
            commit,
            state
        }, data) => {
            axios({
                method: 'POST',
                url: "https://api.judge0.com/submissions?base64_encoded=false&wait=true",
                data: data.data
            }).then((response) => {

                commit('updateResultData', response)
                if (data.callBack) {
                    data.callBack()
                }

            }).catch((error) => {

            })

        },
        uploadProblem: ({
            commit,
            state
        }, data) => {
            axios({

                method: 'POST',
                url: "http://localhost:8080/api/saveProblem",
                data: data,
                headers: {
                    'content-type': 'multipart/form-data'
                }

            }).then((response) => {

         

            })
        },
        getProblemArray: ({
            commit,
            state
        }, data) => {
            axios({

                method: 'GET',
                url: "http://localhost:8080/api/getProblems",

            }).then((response) => {
                console.log(response)
               commit('updateProblemArray',response)

            })

        }
    },

    mutations: {
        updateProblemArray: (state, data) => {
            state.problemsArray=data.data;
            console.log()
        },
        updateResultData: (state, data) => {
            state.resultData = data;
        }
    }
})