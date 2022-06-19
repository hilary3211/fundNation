export const idlFactory = ({ IDL }) => {
  const ProjectId = IDL.Nat;
  const AccountIdText = IDL.Text;
  const Result_1 = IDL.Variant({ 'ok' : IDL.Null, 'err' : IDL.Text });
  const Time = IDL.Int;
  const AccountIdAndTime = IDL.Record({
    'accountId' : AccountIdText,
    'time' : Time,
  });
  const ProjectId__1 = IDL.Nat;
  const Result = IDL.Variant({ 'ok' : AccountIdText, 'err' : IDL.Text });
  const ProjectState = IDL.Variant({
    'closed' : IDL.Null,
    'live' : IDL.Null,
    'noproject' : IDL.Null,
    'approved' : IDL.Vec(IDL.Principal),
  });
  const SubaccountBlob = IDL.Vec(IDL.Nat8);
  const APS = IDL.Tuple(AccountIdText, IDL.Principal, SubaccountBlob);
  const EscrowCanister = IDL.Service({
    'addConfirmedAccountsToConfirmedAccountsArray' : IDL.Func([], [], []),
    'cancelTransfer' : IDL.Func([AccountIdText], [], []),
    'confirmTransfer' : IDL.Func([AccountIdText], [Result_1], []),
    'getAccountsInfo' : IDL.Func([], [IDL.Text], ['query']),
    'getConfirmedAccountsArray' : IDL.Func(
        [],
        [IDL.Vec(AccountIdAndTime)],
        ['query'],
      ),
    'getDisbursements' : IDL.Func([], [IDL.Text], ['query']),
    'getLogs' : IDL.Func([], [IDL.Text], ['query']),
    'getMetadata' : IDL.Func(
        [],
        [
          IDL.Record({
            'recipient' : IDL.Principal,
            'projectId' : ProjectId__1,
          }),
        ],
        ['query'],
      ),
    'getNewAccountId' : IDL.Func([IDL.Principal], [Result], []),
    'getProjectState' : IDL.Func([], [ProjectState], ['query']),
    'getSubaccountsInfo' : IDL.Func(
        [],
        [
          IDL.Record({
            'toRefund' : IDL.Record({
              'arr' : IDL.Vec(APS),
              'count' : IDL.Nat,
              'index' : IDL.Nat,
            }),
            'toDrain' : IDL.Record({
              'arr' : IDL.Vec(APS),
              'count' : IDL.Nat,
              'index' : IDL.Nat,
            }),
          }),
        ],
        ['query'],
      ),
    'releaseFunds' : IDL.Func([], [], []),
    'returnFunds' : IDL.Func([], [], []),
    'updateProjectState' : IDL.Func([], [ProjectState], []),
  });
  return EscrowCanister;
};
export const init = ({ IDL }) => {
  const ProjectId = IDL.Nat;
  return [ProjectId, IDL.Principal];
};
