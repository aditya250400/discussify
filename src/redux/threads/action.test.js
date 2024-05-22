/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/**
 * skenario test
 *
 * - asyncGetAllThreads thunk
 *  - should dispatch showLoading, getAllThreadsSuccessActionCreator and hideLoading on success
 *  - should dispatch showLoading, getAllThreadsFailureActionCreator and hideLoading on failure
 */
import {
  describe, it, expect, vi, beforeEach, afterEach,
} from 'vitest';
import axios from 'axios';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { asyncGetAllThreads, getAllThreadsFailureActionCreator, getAllThreadsSuccessActionCreator } from './action';

vi.mock('axios');

describe('asyncGetAllThreads Thunk', () => {
  beforeEach(() => {
    axios._get = axios.get;
    vi.clearAllMocks();
  });

  afterEach(() => {
    axios.get = axios._get;
    delete axios._get;
    vi.restoreAllMocks();
  });

  it('should dispatch showLoading, getAllThreadsSuccessActionCreator and hideLoading on success', async () => {
    const dispatch = vi.fn();
    const threadsData = [
      {
        id: 'thread-1',
        title: 'Thread pertama',
        body: 'ini adalah thread pertama',
        category: 'General',
        createdAt: '2024-05-20T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
      {
        id: 'thread-2',
        title: 'Thread kedua',
        body: 'ini adalah thread kedua',
        category: 'General',
        createdAt: '2024-05-20T07:00:00.000Z',
        ownerId: 'users-2',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];
    axios.get.mockResolvedValue({
      data: {
        data: {
          threads: threadsData,
        },
      },
    });

    await asyncGetAllThreads()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(getAllThreadsSuccessActionCreator(threadsData));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch showLoading, getAllThreadsFailureActionCreator and hideLoading on failure', async () => {
    const dispatch = vi.fn();
    window.alert = vi.fn();
    const errorMessage = 'Error fetching threads';
    axios.get.mockRejectedValue({ response: { data: { message: errorMessage } } });

    await asyncGetAllThreads()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(getAllThreadsFailureActionCreator(errorMessage));
    expect(window.alert).toHaveBeenCalledWith(errorMessage);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
