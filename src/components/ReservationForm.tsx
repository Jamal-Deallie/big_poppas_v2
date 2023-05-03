import { useEffect, useState } from 'react';
import { Input } from '@/components/Input';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '@/styles/components/ReservationForm.module.scss';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import moment from 'moment';
import * as yup from 'yup';

type FormProps = {
  name: string;
  email: string;
  partySize: number;
  phoneNumber: string;
  time: string;
  date: string;
};

const FormSchema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required('Email is required').email('Email is invalid'),
    phoneNumber: yup.string().required(),
    partySize: yup.number().max(6).required(),
    message: yup.string().required(),
    date: yup.date().required(),
    startTime: yup
      .string()
      .required('Start time is required')
      .test(
        'startTime',
        'Start time should be between 9:00am - 12:59am EST',
        value => {
          if (!value) {
            return false;
          }
          const startTime = new Date(`2023-01-01T${value} EST`);
          const startLimit = new Date(`2023-01-01T09:00:00 EST`);
          const endLimit = new Date(`2023-01-02T01:00:00 EST`);
          return startTime >= startLimit && startTime < endLimit;
        }
      ),
    endTime: yup
      .string()
      .required('End time is required')
      .test(
        'endTime',
        'End time should be between 9:00am - 12:59am EST',
        (value, { parent }) => {
          if (!value) {
            return false;
          }
          const endTime = new Date(`2023-01-01T${value} EST`);
          const startLimit = new Date(`2023-01-01T09:00:00 EST`);
          const endLimit = new Date(`2023-01-02T01:00:00 EST`);
          const startTime = new Date(`2023-01-01T${parent.startTime} EST`);
          return (
            endTime >= startLimit && endTime < endLimit && endTime > startTime
          );
        }
      )
  })
  .required();

export default function ReservationForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm<FormProps>({
    resolver: yupResolver(FormSchema)
  });

  const submit = (form: FormProps) => {
    console.log('Submitted', form);
  };

  return (
    <div className={styles['form-cont']}>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <div className={styles.input}>
            <Input type="text" placeholder="Name" {...register('name')} />
          </div>
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </div>
        <div className="mt-3">
          <div className={styles.input}>
            <Input
              type="text"
              placeholder="Phone Number"
              {...register('phoneNumber')}
            />
          </div>
          {errors.phoneNumber && (
            <p className={styles.error}>{errors.phoneNumber.message}</p>
          )}
        </div>
        <div className="mt-3">
          <div className={styles.input}>
            <Input
              type="number"
              placeholder="Party Size"
              {...register('partySize')}
            />
          </div>
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>
        <div className="mt-3">
          <div className={styles.input}>
            <Input type="date" {...register('date')} />
          </div>
          {errors.date && (
            <p className={styles.error}>{errors.date.message}</p>
          )}
        </div>
        <div className="mt-3">
          <div className={styles.input}>
            <Input type="time" {...register('time')} />
          </div>
          {errors.time && (
            <p className={styles.error}>{errors.time.message}</p>
          )}
        </div>
        <div className="mt-3">
          <input type="button" value="Submit" className={styles['btn']} />
        </div>
      </form>
      <DevTool control={control}/>
    </div>
  );
}
