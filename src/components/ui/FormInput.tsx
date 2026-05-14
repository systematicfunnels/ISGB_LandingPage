'use client'

import React, { useState, forwardRef } from 'react'
import { clsx } from 'clsx'

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  required?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ 
    label, 
    error, 
    helperText, 
    required = false, 
    leftIcon, 
    rightIcon, 
    className = '',
    value,
    onChange,
    onBlur,
    ...props 
  }, ref) => {
    const [isFocused, setIsFocused] = useState(false)
    const [hasError, setHasError] = useState(false)

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)
      
      // Trigger validation shake if there's an error
      if (error) {
        setHasError(true)
        // Haptic feedback on mobile for errors
        if ('vibrate' in navigator) {
          navigator.vibrate(10)
        }
        setTimeout(() => setHasError(false), 400)
      }
      
      onBlur?.(e)
    }

    const handleFocus = () => {
      setIsFocused(true)
    }

    const inputClasses = clsx(
      'w-full px-4 py-3 rounded-lg border transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
      'placeholder:text-slate-400',
      {
        'border-red-500 bg-red-50': error,
        'border-slate-300 bg-white': !error,
        'border-primary-500 shadow-lg': isFocused && !error,
        'shake-error': hasError,
      },
      leftIcon && 'pl-12',
      rightIcon && 'pr-12',
      className
    )

    const labelClasses = clsx(
      'block text-sm font-medium mb-2 transition-colors duration-200',
      {
        'text-red-600': error,
        'text-slate-700': !error,
      }
    )

    return (
      <div className="w-full">
        {label && (
          <label className={labelClasses}>
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
              {leftIcon}
            </div>
          )}
          
          <input
            ref={ref}
            className={inputClasses}
            value={value}
            onChange={onChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            aria-invalid={!!error}
            aria-describedby={error ? `${props.id}-error` : helperText ? `${props.id}-helper` : undefined}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400">
              {rightIcon}
            </div>
          )}
        </div>
        
        {error && (
          <p 
            id={`${props.id}-error`}
            className="mt-2 text-sm text-red-600 animate-slide-down"
            role="alert"
          >
            {error}
          </p>
        )}
        
        {helperText && !error && (
          <p 
            id={`${props.id}-helper`}
            className="mt-2 text-sm text-slate-500"
          >
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

FormInput.displayName = 'FormInput'

interface FormTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
  required?: boolean
}

export const FormTextArea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  ({ 
    label, 
    error, 
    helperText, 
    required = false, 
    className = '',
    value,
    onChange,
    onBlur,
    ...props 
  }, ref) => {
    const [isFocused, setIsFocused] = useState(false)
    const [hasError, setHasError] = useState(false)

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false)
      
      // Trigger validation shake if there's an error
      if (error) {
        setHasError(true)
        setTimeout(() => setHasError(false), 400)
      }
      
      onBlur?.(e)
    }

    const handleFocus = () => {
      setIsFocused(true)
      // Haptic feedback on mobile
      if ('vibrate' in navigator) {
        navigator.vibrate(5)
      }
    }

    const textareaClasses = clsx(
      'w-full px-4 py-3 rounded-lg border transition-all duration-200 resize-none',
      'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
      'placeholder:text-slate-400',
      {
        'border-red-500 bg-red-50': error,
        'border-slate-300 bg-white': !error,
        'border-primary-500 shadow-lg': isFocused && !error,
        'shake-error': hasError,
      },
      className
    )

    const labelClasses = clsx(
      'block text-sm font-medium mb-2 transition-colors duration-200',
      {
        'text-red-600': error,
        'text-slate-700': !error,
      }
    )

    return (
      <div className="w-full">
        {label && (
          <label className={labelClasses}>
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <textarea
          ref={ref}
          className={textareaClasses}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          aria-invalid={!!error}
          aria-describedby={error ? `${props.id}-error` : helperText ? `${props.id}-helper` : undefined}
          {...props}
        />
        
        {error && (
          <p 
            id={`${props.id}-error`}
            className="mt-2 text-sm text-red-600 animate-slide-down"
            role="alert"
          >
            {error}
          </p>
        )}
        
        {helperText && !error && (
          <p 
            id={`${props.id}-helper`}
            className="mt-2 text-sm text-slate-500"
          >
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

FormTextArea.displayName = 'FormTextArea'
