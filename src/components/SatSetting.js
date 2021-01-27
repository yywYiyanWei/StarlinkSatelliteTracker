import React, { Component } from 'react';
import {Form, Button, InputNumber} from 'antd';

class SatSettingForm extends Component {
  showSatellite = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        this.props.onShow(values);
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 11 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 11 },
      },
    };

    return (
      <Form {...formItemLayout} className="sat-setting" onSubmit={this.showSatellite}>
        <Form.Item label="Longtitude(degrees)">
          {
            getFieldDecorator("longtitude", {
              rules: [
                {
                  required: true,
                  message: "Please indicate the longtitude",
                }
              ],
            })(<InputNumber
              min={-180} max={180}
              style={{width: "100%"}}
              placeholder="Please input Longitude"
            />)
          }
        </Form.Item>
        <Form.Item label="Latitude(degrees)">
          {
            getFieldDecorator("latitude", {
              rules: [
                {
                  required: true,
                  message: "Please input your Latitude",
                }
              ],
            })(<InputNumber 
                placeholder="Please input Latitude"
                min={-90} max={90}
                style={{width: "100%"}}
            />)
          }
        </Form.Item>
        <Form.Item label="Elevation(meters)">
          {
              getFieldDecorator("elevation", {
                  rules: [
                      {
                          required: true,
                          message: "Please input your Elevation",
                      }
                  ],
              })(<InputNumber placeholder="Please input Elevation"
                              min={-413} max={8850}
                              style={{width: "100%"}}
              />)
          }
      </Form.Item>
        <Form.Item label="Altitude(degrees)">
            {
                getFieldDecorator("altitude", {
                    rules: [
                        {
                            required: true,
                            message: "Please input your Altitude",
                        }
                    ],
                })(<InputNumber placeholder="Please input Altitude"
                                min={0} max={90}
                                style={{width: "100%"}}
                /> )
            }
        </Form.Item>
        <Form.Item label="Duration(secs)">
          {
          getFieldDecorator("duration", {
            rules: [
              {
                required: true,
                message: "Please input your Duration",
              }
            ],
          })(<InputNumber placeholder="Please input Duration" min={0} max={90} style={{width: "100%"}} />)
          }
        </Form.Item>
        <Form.Item className="show-nearby">
          <Button type="primary" htmlType="submit" style={{textAlign: 'center'}}>
            Find nearby satellite
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const SatSetting1 = Form.create({name: 'satellite-setting'})(SatSettingForm)
export default SatSetting1;