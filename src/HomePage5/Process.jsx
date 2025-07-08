import React from 'react';

const Process = () => {
  const services = [
    {
      title: 'Cooking With Care',
      description: 'Its the perfect dining experience where Experience quick and efficient',
    },
    {
      title: 'QUICKLY DELIVERY',
      description: 'Its the perfect dining experience where Experience quick and efficient',
      highlight: true,
    },
    {
      title: 'CHOOSE FOOD',
      description: 'Its the perfect dining experience where Experience quick and efficient',
    },
  ];

  // Define responsive breakpoints
  const getBreakpoints = (width) => {
    if (width < 480) return 'xs';
    if (width < 768) return 'sm';
    if (width < 1024) return 'md';
    return 'lg';
  };

  const screenWidth = window.innerWidth;
  const breakpoint = getBreakpoints(screenWidth);

  const isMobile = breakpoint === 'xs' || breakpoint === 'sm';

  const Card = ({ title, description, highlight }) => {
    return (
      <div
        style={{
          flex: '1 1 280px',
          padding: 20,
          borderRadius: 10,
          textAlign: 'center',
          backgroundColor: highlight ? '#ffffff' : 'transparent',
          boxShadow: highlight ? '0 2px 6px rgba(0,0,0,0.1)' : 'none',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ fontWeight: '800', fontSize: 16, marginBottom: 10 }}>{title}</div>
        <div style={{ fontSize: 13, color: '#555', lineHeight: 1.5 }}>{description}</div>
      </div>
    );
  };

  return (
    <div
      style={{
        backgroundColor: '#F4F1EA',
        padding: screenWidth < 768 ? '60px 20px' : '100px 40px',
        minHeight: '80vh',
        textAlign: 'center',
        boxSizing: 'border-box',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
      }}
    >
      <div
        style={{
          color: 'green',
          fontWeight: '600',
          fontSize: 13,
          textTransform: 'uppercase',
          marginBottom: 10,
        }}
      >
        FOOD PROCESSING
      </div>

      <div
        style={{
          fontSize: 32,
          fontWeight: '800',
          marginBottom: 60,
        }}
      >
        HOW WE SERVE YOU?
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
          position: 'relative',
          maxWidth: 860,
          margin: '0 auto',
        }}
      >
        {!isMobile && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              right: 0,
              height: 2,
              backgroundColor: '#ccc',
              zIndex: 0,
              transform: 'translateY(-50%)',
            }}
          />
        )}

        {services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            description={service.description}
            highlight={service.highlight}
          />
        ))}
      </div>
    </div>
  );
};

export default Process;
