export const fade = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.4, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.4, ease: [0.83, 0, 0.17, 1] }
	}
}

export const fadeDelay = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.55, ease: [0.83, 0, 0.17, 1], delay: 1.1 }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.55, ease: [0.83, 0, 0.17, 1], delay: 0.5 }
	}
}

export const fadeSmallDelay = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.55, ease: [0.83, 0, 0.17, 1], delay: 0.55 }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.55, ease: [0.83, 0, 0.17, 1], delay: 1 }
	}
}

export const revealIn = {
	initial: { y: 0 },
  enter: { 
    y: "130%",
    transition: { duration: 1.6, ease: [0.83, 0, 0.17, 1], delay: 0.5 }
  },
	exit: {
    y: 0,
		transition: { duration: 1.6, ease: [0.83, 0, 0.17, 1] }
	}
}

export const revealInNoDelay = {
	initial: { y: 0 },
  enter: { 
    y: "130%",
    transition: { duration: 1.6, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    y: 0,
		transition: { duration: 1.6, ease: [0.83, 0, 0.17, 1] }
	}
}

export const textReveal = {
	initial: { y: "100%" },
  enter: { 
    y: 0,
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1], delay: 0.95 }
  },
	exit: {
    y: "100%",
		transition: { duration: 1, ease: [0.83, 0, 0.17, 1] }
	}
}

export const textRevealSmallDelay = {
	initial: { y: "100%" },
  enter: { 
    y: 0,
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1], delay: 0.35 }
  },
	exit: {
    y: "100%",
		transition: { duration: 1, ease: [0.83, 0, 0.17, 1] }
	}
}

export const revealInLogo = {
	initial: { opacity: 1 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.25, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 1,
		transition: { duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 1 }
	}
}

export const revealInLogoNoDelay = {
	initial: { opacity: 1 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.25, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 1,
		transition: { duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 1 }
	}
}


export const revealInLogoMove = {
	initial: { opacity: 1, y: 0 },
  enter: { 
    opacity: 0,
    y: '100%',
    transition: { duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.6 }
  },
	exit: {
    opacity: 1,
    y: 0,
		transition: { duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.6 }
	}
}

export const revealInLogoMoveNoDelay = {
	initial: { opacity: 1, y: 0 },
  enter: { 
    opacity: 0,
    y: '100%',
    transition: { duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.25 }
  },
	exit: {
    opacity: 1,
    y: 0,
		transition: { duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.65 }
	}
}