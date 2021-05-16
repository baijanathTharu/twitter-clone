/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Request, Response } from 'express';

import {
  createTokens,
  encryptPassword,
  sanitizeResponse,
  wrapPromise,
} from '@shared/functions';

import {
  addUserService,
  deleteUserService,
  getAllUsersService,
  getUserService,
  updateUserService,
} from './user.service';
import { IUser } from './dto/user.dto';
import { Role } from './user.entity';
import { StatusCodes } from 'http-status-codes';

const { FORBIDDEN } = StatusCodes;

/**
 * Get a user.
 *
 * @param req
 * @param res
 * @returns
 */
export async function getUser(req: Request, res: Response): Promise<void> {
  const id = parseInt(req.params.id);

  const user = await getUserService(id);

  res.json({ data: sanitizeResponse(user) });
}

/**
 * Get all users.
 *
 * @param req
 * @param res
 * @returns
 */
export async function getUsers(req: Request, res: Response): Promise<void> {
  let page = 1,
    limit = 10;
  if (req.query) {
    page = req.query.page as number;
    limit = req.query.limit as number;
  }

  const users = await getAllUsersService(page, limit);

  // Todo: improve pagination

  const sanitizedUsers = users.map((user) => sanitizeResponse(user));
  res.json({ data: sanitizedUsers, page });
}

/**
 * Add one user.
 *
 * @param req
 * @param res
 * @returns
 */
export async function addUser(req: Request, res: Response): Promise<void> {
  const payload: IUser = req.body as any;

  // encrypt password
  const [encrypted, encryptErr] = await wrapPromise(
    encryptPassword(payload.password)
  );
  if (encryptErr) throw encryptErr;
  payload.password = encrypted;

  // add role to user
  payload.role = Role.USER;

  const user = await addUserService(payload);

  const tokens = await createTokens(sanitizeResponse(user));

  res.json({ data: sanitizeResponse(user), ...tokens });
}

/**
 * Update one user.
 *
 * @param req
 * @param res
 * @returns
 */
export async function updateUser(req: Request, res: Response): Promise<void> {
  const id = parseInt(req.params.id);
  const userId = req.userId;

  if (id !== userId) {
    res.status(FORBIDDEN).json({ error: 'forbidden to update' });
    return;
  }

  const payload = req.body as any;

  // encrypt password
  if (payload.password) {
    const [encrypted, encryptErr] = await wrapPromise(
      encryptPassword(payload.password)
    );
    if (encryptErr) throw encryptErr;
    payload.password = encrypted;
  }

  const updatedUser = await updateUserService(id, payload);
  res.json({ data: sanitizeResponse(updatedUser) });
}

/**
 * Delete one user.
 *
 * @param req
 * @param res
 * @returns
 */
export async function deleteUser(req: Request, res: Response): Promise<void> {
  const id = parseInt(req.params.id);

  const userId = req.userId;

  if (id !== userId) {
    res.status(FORBIDDEN).json({
      error: 'forbidden to delete this id',
    });
    return;
  }

  const deleted = await deleteUserService(userId);

  res.json({ data: sanitizeResponse(deleted) });
}
