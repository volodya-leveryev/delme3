test('My Test', () => {
    fetch("http://localhost:3000/api/").then(resp => {
        expect(resp.status).toBe(200)
        expect(resp.headers.get('content-type')).toBe('application/json; charset=utf-8')
        resp.json().then(data => {
            expect('time' in data).toBe(true)
        })
    });
})
