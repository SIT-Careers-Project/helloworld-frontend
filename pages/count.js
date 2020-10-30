import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCount } from '../store/count/action'
import { Container, Button } from '@material-ui/core'

const Count = (props) => {
  const { count, addCount } = props
  return (
    <Container>
      <h1>{count}</h1>
      <Button onClick={addCount}>Add To Count</Button>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  count: state.count.count
})

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)
