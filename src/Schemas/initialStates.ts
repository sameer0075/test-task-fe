const authInitialState = { username: '', password: '' }

const issuesInitialState ={
  title: '',
  priority: '',
  dcSwitchStatus: '',
  status: '',
  electrical: false,
  description: '',
  repairDate: '',
  timeEstimateHours: 0,
  hub: false,
  user: null,
  role: null
}

export { authInitialState, issuesInitialState }