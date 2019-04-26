import Vue from 'vue'
import store from './store'
import ProblemSubmission from './components/ProblemSubmission.vue'
import ProblemsContainer from './components/ProblemsContainer.vue'
import ProblemPage from './components/ProblemPage.vue'
import Result from './components/Result.vue'
import test1 from './components/test1.vue'
export default [{
        path: '/',
        name: 'ProblemsContainer',
        component: test1,
    },

    {
        path: '/submissionresult',
        name: 'Result',
        component: Result,
    },
    {
        path: '/problemSubmission',
        name: 'ProblemSubmission',
        component: ProblemSubmission,
    },
    {
        path: '/problemPage',
        name: 'ProblemPage',
        component: ProblemPage,
    }
]