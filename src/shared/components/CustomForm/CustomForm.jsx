import React from 'react';
import { Button, Form, Input, Select, DatePicker, Checkbox } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
const { Option } = Select;
const { TextArea } = Input;

export const CustomForm = ({
  fields,
  onSubmit,
  layout,
  buttonText = 'Submit',
  validationSchema,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
  });

  const defaultLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
    ...layout,
  };

  return (
    <Form {...defaultLayout} onFinish={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <Form.Item
          key={field.name}
          label={field.label}
          validateStatus={errors[field.name] ? 'error' : ''}
          help={errors[field.name]?.message}
        >
          <Controller
            name={field.name}
            control={control}
            render={({ field: controllerField }) => {
              switch (field.type) {
                case 'input':
                  return <Input {...controllerField} placeholder={field.placeholder} />;
                case 'password':
                  return <Input.Password {...controllerField} placeholder={field.placeholder} />;
                case 'select':
                  return (
                    <Select {...controllerField} placeholder={field.placeholder}>
                      {field.options.map((option) => (
                        <Option key={option.value} value={option.value}>
                          {option.label}
                        </Option>
                      ))}
                    </Select>
                  );
                case 'textarea':
                  return <TextArea {...controllerField} placeholder={field.placeholder} />;
                case 'datepicker':
                  return <DatePicker {...controllerField} style={{ width: '100%' }} />;
                case 'checkbox':
                  return <Checkbox {...controllerField}>{field.label}</Checkbox>;
                default:
                  return null;
              }
            }}
          />
        </Form.Item>
      ))}

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isSubmitting}>
          {buttonText}
        </Button>
      </Form.Item>
    </Form>
  );
};
