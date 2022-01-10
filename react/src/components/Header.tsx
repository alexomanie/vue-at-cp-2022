import Logo from '../assets/logo.svg'

export const Header = ({ onImageClick }: { onImageClick: () => void }) => {
  return (
    <div className={`flex items-center justify-center`}>
      <img onClick={onImageClick} className={`w-20 h-20`} src={Logo} alt="react logo" />
      <span>Welcome to the react movie app</span>
    </div>
  )
}
