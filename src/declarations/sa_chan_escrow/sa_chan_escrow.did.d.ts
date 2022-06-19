import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export type APS = [AccountIdText, Principal, SubaccountBlob];
export interface AccountIdAndTime { 'accountId' : AccountIdText, 'time' : Time }
export type AccountIdText = string;
export interface EscrowCanister {
  'addConfirmedAccountsToConfirmedAccountsArray' : ActorMethod<[], undefined>,
  'cancelTransfer' : ActorMethod<[AccountIdText], undefined>,
  'confirmTransfer' : ActorMethod<[AccountIdText], Result_1>,
  'getAccountsInfo' : ActorMethod<[], string>,
  'getConfirmedAccountsArray' : ActorMethod<[], Array<AccountIdAndTime>>,
  'getDisbursements' : ActorMethod<[], string>,
  'getLogs' : ActorMethod<[], string>,
  'getMetadata' : ActorMethod<
    [],
    { 'recipient' : Principal, 'projectId' : ProjectId__1 },
  >,
  'getNewAccountId' : ActorMethod<[Principal], Result>,
  'getProjectState' : ActorMethod<[], ProjectState>,
  'getSubaccountsInfo' : ActorMethod<
    [],
    {
      'toRefund' : { 'arr' : Array<APS>, 'count' : bigint, 'index' : bigint },
      'toDrain' : { 'arr' : Array<APS>, 'count' : bigint, 'index' : bigint },
    },
  >,
  'releaseFunds' : ActorMethod<[], undefined>,
  'returnFunds' : ActorMethod<[], undefined>,
  'updateProjectState' : ActorMethod<[], ProjectState>,
}
export type ProjectId = bigint;
export type ProjectId__1 = bigint;
export type ProjectState = { 'closed' : null } |
  { 'live' : null } |
  { 'noproject' : null } |
  { 'approved' : Array<Principal> };
export type Result = { 'ok' : AccountIdText } |
  { 'err' : string };
export type Result_1 = { 'ok' : null } |
  { 'err' : string };
export type SubaccountBlob = Array<number>;
export type Time = bigint;
export interface _SERVICE extends EscrowCanister {}
