import React from 'react';

const Process = () => {
  const services = [
    {
      title: 'Cooking With Care',
      description:
        'It’s the perfect dining experience where every dish is crafted with precision and heart.',
    },
    {
      title: 'QUICKLY DELIVERY',
      description:
        'Fast and efficient service ensures your meals are delivered fresh and on time.',
      highlight: true,
    },
    {
      title: 'CHOOSE FOOD',
      description:
        'Explore a diverse menu and choose your favorite meals with just a few clicks.',
    },
  ];

  const Card = ({ title, description, highlight }) => (
    <div
      style={{
        flex: '1 1 260px',
        padding: '20px',
        borderRadius: '12px',
        textAlign: 'center',
        backgroundColor: highlight ? '#fff' : 'transparent',
        boxShadow: highlight ? '0 4px 10px rgba(0,0,0,0.08)' : 'none',
        minWidth: '240px',
        maxWidth: '320px',
        boxSizing: 'border-box',
        position: 'relative',
        zIndex: 1,
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          fontWeight: '800',
          fontSize: '16px',
          marginBottom: '10px',
          textTransform: 'uppercase',
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: '14px',
          color: '#555',
          lineHeight: 1.6,
        }}
      >
        {description}
      </div>
    </div>
  );

  return (
    <div
      style={{
        backgroundColor: '#F4F1EA',
        padding: '80px 20px',
        textAlign: 'center',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          color: 'green',
          fontWeight: '600',
          fontSize: '13px',
          textTransform: 'uppercase',
          marginBottom: '10px',
        }}
      >
        FOOD PROCESSING
      </div>

      <div
        style={{
          fontSize: '30px',
          fontWeight: '800',
          marginBottom: '50px',
        }}
      >
        HOW WE SERVE YOU?
      </div>

      {/* Cards Row */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px',
          maxWidth: '960px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        {/* Connector Line (will only be visible when space allows due to flex wrap) */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            height: '2px',
            backgroundColor: '#ccc',
            zIndex: 0,
            transform: 'translateY(-50%)',
            width: '100%',
            pointerEvents: 'none',
          }}
        />

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
