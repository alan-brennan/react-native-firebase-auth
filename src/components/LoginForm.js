import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';


class LoginForm extends Component {
  state = { email: '' };

  render() {
    return (
      <Card >
        <CardSection >
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection >
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangetext={password => this.setState({ password })}
          />
        </CardSection>

        <CardSection >
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
