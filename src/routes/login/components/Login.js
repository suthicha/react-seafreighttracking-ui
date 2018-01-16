import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Avatar from 'material-ui/Avatar'
import LockIcon from 'material-ui/svg-icons/action/lock-outline'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import CircularProgress from 'material-ui/CircularProgress'
import { propTypes, reduxForm, Field } from 'redux-form'
import { Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import RenderTextField from '../../../components/RenderTextField'

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        marginTop: '-100px',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        minWidth: 600,
    },
    avatar: {
        margin: '1em',
        textAlign: 'center ',
    },
    form: {
        padding: '0 1em 1em 1em',
    },
    input: {
        display: 'flex',
    },
  };

class Login extends Component {
    constructor(props){
        super(props)
        this.state = { logMessage: '' }
        this.onFormSubmitEventHandler = this.onFormSubmitEventHandler.bind(this)

    }

    componentWillMount() {
        // get dispatch from props
        // console.log('componentWillMount', this.props)
        
    }

    componentWillReceiveProps(nextProps){
        const { obAuth } = nextProps
        if (obAuth.data){
            const { auth, user } = obAuth.data
            if(auth.status == 200){
                const { addAuthToSorage, validateAuth } = this.props
                addAuthToSorage(auth,user)
                validateAuth()    
            }else {
                this.setState({ logMessage: user.Message })
            }
        }
    }

    onFormSubmitEventHandler = (user) => {
        const { LoginName, Password } = user
        this.props.checkLogin(LoginName, Password)
    }

    render(){
        const { handleSubmit, obAuth } = this.props
        const labelStyle = {
            fontSize: '11.75pt',
            textTransform: 'none',
          }

        return (
            <div style={{...styles.main}}>
                <Card style={styles.card}>
                    <div style={styles.avatar}>
                        <Avatar
                            color="orange"
                            icon={<LockIcon />}
                            size={60}
                        />
                    </div>
                    <form onSubmit={handleSubmit(this.onFormSubmitEventHandler)}>
                        <div style={styles.form}>
                            <div style={styles.input}>
                            <Field
                                name="LoginName"
                                component={RenderTextField}
                                floatingLabelText="Enter username"
                                disabled={false}
                            />
                            </div>
                            <div style={styles.input}>
                            <Field
                                name="Password"
                                component={RenderTextField}
                                floatingLabelText="Your password"
                                type="password"
                                disabled={false}
                            />
                            </div>
                        </div>
                        <CardActions>
                            <RaisedButton 
                                type="submit"
                                label={"Login"} 
                                primary={true}
                                fullWidth
                                icon = {
                                obAuth.isLoading && (
                                    <CircularProgress
                                    size={25}
                                    thickness={2}
                                    />
                                )
                                } 
                                />
                            <FlatButton 
                                href="register"
                                label="Click here to register."
                                labelStyle={labelStyle}
                                fullWidth />
                        </CardActions>
                    </form>
                </Card>
            </div>
        )
    }
}

export default Login
