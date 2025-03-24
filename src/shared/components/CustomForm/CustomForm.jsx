import React from 'react';
import { Button, Form, Input, Select, DatePicker, Checkbox } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const { Option } = Select;
const { TextArea } = Input;

export const CustomForm = ({
  fields,
  onSubmit,
  layout = 'vertical',
  buttonText = 'Submit',
  validationSchema,
  CustomButton,
  customButtonNode,
  fullWidth = true,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
  });
  const renderButton = () => {
    if (customButtonNode) return customButtonNode;

    const ButtonToUse = CustomButton || Button;

    return (
      <ButtonToUse type="primary" htmlType="submit" style={fullWidth ? { width: '100%' } : {}}>
        {buttonText}
      </ButtonToUse>
    );
  };

  return (
    <Form layout={layout} onFinish={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <Form.Item
          key={field.name}
          label={field.label}
          validateStatus={errors[field.name] ? 'error' : ''}
          help={errors[field.name]?.message}
          required={field.required}
        >
          <Controller
            name={field.name}
            control={control}
            render={({ field: controllerField }) => {
              const Component = field.component;

              switch (field.type) {
                case 'input':
                case 'password':
                case 'textarea':
                  return Component ? (
                    <Component {...controllerField} placeholder={field.placeholder} />
                  ) : field.type === 'password' ? (
                    <Input.Password {...controllerField} placeholder={field.placeholder} />
                  ) : field.type === 'textarea' ? (
                    <TextArea {...controllerField} placeholder={field.placeholder} />
                  ) : (
                    <Input {...controllerField} placeholder={field.placeholder} />
                  );

                case 'select':
                  return (
                    <Select {...controllerField} placeholder={field.placeholder}>
                      {field.options?.map((option) => (
                        <Option key={option.value} value={option.value}>
                          {option.label}
                        </Option>
                      ))}
                    </Select>
                  );

                case 'datepicker':
                  return <DatePicker {...controllerField} style={{ width: '100%' }} />;

                case 'checkbox':
                  return (
                    <Checkbox {...controllerField} checked={controllerField.value}>
                      {field.label}
                    </Checkbox>
                  );

                default:
                  return null;
              }
            }}
          />
        </Form.Item>
      ))}

      <Form.Item>{renderButton() && <Form.Item>{renderButton()}</Form.Item>}</Form.Item>
    </Form>
  );
};
