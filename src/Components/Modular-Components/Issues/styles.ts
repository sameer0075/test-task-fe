const logoutButtonStyles = {
  borderRadius: 10,
  height: 40,
  width: '100px',
  border: '1px solid #E9513E',
  color: '#E9513E',
  '&:hover': {
    backgroundColor: '#E7463F33',
    border: '1px solid #E9513E',
  },
  textTransform: 'none',
}

const saveChangesButtonStyles = {
  borderRadius: 10,
  height: 40,
  minWidth: '100px',
  color: 'white',
  background: 'linear-gradient(180deg, #E7463F, #EF8439)',
  textTransform: 'none',
}

const formHeadingStyles = { color: '#E9513E', fontSize: '18px', fontWeight: 'bold' }

const formSubHeadingStyles = { color: 'text.secondary', marginBottom: 2, fontSize: '14px', }

const formContainerStyles  = { display: 'flex', flexDirection: 'column', }

const inputPropStyles =  (inputBorder: any) => {
  return {
  style: {
      height: '100px',
      overflowY: 'hidden',
      ...inputBorder,
  },
  inputProps: {
      style: {
          height: '80px',
          overflowY: 'hidden', 
      },
  },
}}

const assignButtonStyles={
  borderRadius: 10,
  height: 40,
  minWidth: '200px',
  color: 'white',
  background: 'linear-gradient(180deg, #E7463F, #EF8439)',
  textTransform: 'none',
  fontSize: '10px !important'
}

export { logoutButtonStyles, saveChangesButtonStyles, formHeadingStyles, formSubHeadingStyles, formContainerStyles , inputPropStyles, assignButtonStyles}