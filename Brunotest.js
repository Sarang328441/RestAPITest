// Cypress test suite generated from Bruno collection

const baseUrl = 'https://api.restful-api.dev/objects';

describe('CONNECTPRACTICE API Tests', () => {

  it('AllObjects - GET with query param', () => {
    cy.request(`${baseUrl}?name=Realme`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
    });
  });

  it('BYyear - GET with year=2019', () => {
    cy.request(`${baseUrl}?year=2019`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
    });
  });

  it('FullUpdate - PUT with updated data', () => {
    cy.request({
      method: 'PUT',
      url: `${baseUrl}/ff808181932badb60195fad8023f0b53`,
      body: {
        name: "Asus Gaming Phone",
        data: {
          year: 2025,
          RAM: 32,
          Processor: "SnapDragon776"
        }
      },
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq("Asus Gaming Phone");
    });
  });

  it('GamingPhone - POST with basic auth', () => {
    cy.request({
      method: 'POST',
      url: baseUrl,
      auth: {
        username: 'Sarang',
        password: 'Sarang123'
      },
      body: {
        name: "RoG Gaming",
        data: {
          year: 2026,
          price: 849.99,
          "CPU model": "UltraTek",
          "Hard disk size": "1 TB"
        }
      },
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq("RoG Gaming");
    });
  });

  it('NewProduct - POST and validate ID returned', () => {
    cy.request({
      method: 'POST',
      url: baseUrl,
      body: {
        name: "RoG Gaming",
        data: {
          year: 2026,
          price: 849.99,
          "CPU model": "UltraTek",
          "Hard disk size": "1 TB"
        }
      },
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id');
    });
  });

  it('ObjectByID - GET multiple IDs', () => {
    cy.request(`${baseUrl}?id=3&id=6&id=9`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
    });
  });

  it('Phone2 - POST with different data and auth', () => {
    cy.request({
      method: 'POST',
      url: baseUrl,
      auth: {
        username: 'Sarang',
        password: 'Sarang123'
      },
      body: {
        name: "RoG Gaming",
        data: {
          year: 2026,
          RAM: 16,
          Processor: "SnapDragon860"
        }
      },
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('Phonename - PATCH name update', () => {
    cy.request({
      method: 'PATCH',
      url: `${baseUrl}/ff808181932badb60195faceb6a10b41`,
      body: { name: "ROG Gaming EDition" },
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq("ROG Gaming EDition");
    });
  });

  it('Practice - GET object by ID', () => {
    cy.request(`${baseUrl}/ff808181932badb60195faea80cd0b80`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id');
    });
  });

  it('realme6 - GET by specific ID', () => {
    cy.request(`${baseUrl}?id=ff808181932badb60195faac46ff0b03`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
    });
  });

  it('SingleID - GET by year', () => {
    cy.request(`${baseUrl}?year=2019`).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('updateData - DELETE by ID variable', () => {
    const dynamicId = 'ff808181932badb601966141b40846ca';
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/${dynamicId}`
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 204]);
    });
  });

});
