describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Bob';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {

    // serverNameInput.value = 'Bob';

    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Bob');
  });

  it('should not add a new server to allServers with empty input', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update the #serverTable with correct data on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let currentTdList = document.querySelectorAll('#serverTable tbody tr td');

    expect(currentTdList.length).toEqual(2);
    expect(currentTdList[0].innerText).toEqual('Bob');
    expect(currentTdList[1].innerText).toEqual('$0.00');

  });

  afterEach(function () {
    // teardown logic
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = '';


  });
})