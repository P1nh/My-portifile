import { styled } from "@mui/material"
import React, { ReactNode } from "react"


interface StyledButtonProps {
  children: ReactNode;
  onClick?: () => void;
}


const StyledButton: React.FC<StyledButtonProps> = ({children, onClick}) => {
  
    const StyledButton = styled("button")(({theme}) => ({
        backgroundColor: "transparent",
        border: `1px solid black `,
        borderRadius: "5px",
        padding: "5px 15px",
        width: "100%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        
        color: (theme.palette.primary.light),
        ":hover":{background: theme.palette.secondary.light}
      }))

    return (
      <>
       <StyledButton onClick={onClick}>{children}</StyledButton>
      </>
    )
  }
  
  export default StyledButton