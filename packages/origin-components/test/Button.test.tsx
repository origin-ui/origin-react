import { render, screen, fireEvent } from '@testing-library/react'
import Button, { ButtonSize, ButtonType } from '../Button'

const defaultProps = {
  // jest 创建的一个模拟函数
  onClick: jest.fn()
}

describe('test Button component', () => {
  it('should render the default button', () => {
    render(<Button {...defaultProps}>Origin</Button>)
    const element = screen.getByText('Origin')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    // fireEvent 触发 element 事件. click hover ...
    fireEvent.click(element)
    // 判断 onClick 是否被调用
    expect(defaultProps.onClick).toHaveBeenCalled()
  })

  // 判断 disabled 态 button
  it('should render disable button when disable set to true', () => {
    render(<Button size={ButtonSize.Large} btnType={ButtonType.Primary} disabled {...defaultProps}>Origin</Button>)
    const element = screen.getByText('Origin') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn btn-primary')
    // 是否 disabled
    expect(element.disabled).toBeTruthy()
    // 调用 click 方法
    fireEvent.click(element)
    // disabled 不应该调用方法
    expect(defaultProps.onClick).not.toHaveBeenCalled()
  })

  // 判断 link 态 button
  it('should render a link when button type equals link', () => {
    render(<Button btnType={ButtonType.Link} href='https://www.baidu.com' size={ButtonSize.Large}>Origin</Button>)
    const element = screen.getByText('Origin')
    expect(element.tagName).toBe('A')
    expect(element.tagName).not.toBe('BUTTON')
    expect(element).toHaveClass('btn btn-link')
  })

  // 判断其他状态的 button
  it('should render the default component based on different props', () => {
    render(<Button btnType={ButtonType.Danger}>danger</Button>)
    const element = screen.getByText('danger')
    expect(element.tagName).toBe('BUTTON')
    expect(element).toHaveClass('btn btn-danger')
  })
})
